import { useEffect, useRef, memo } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

export const NeuralNetwork = memo(function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      return { width: rect.width, height: rect.height };
    };
    
    const { width, height } = updateSize();
    dimensionsRef.current = { width, height };

    // Create nodes for neural network - only once with proper dimensions
    const nodeCount = 60;
    const nodes: Node[] = [];

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: []
      });
    }
    
    nodesRef.current = nodes;

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      const { width, height } = dimensionsRef.current;
      ctx.clearRect(0, 0, width, height);

      // Update positions
      nodesRef.current.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      });

      // Draw connections
      const maxDistance = 150;
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const dx = nodesRef.current[i].x - nodesRef.current[j].x;
          const dy = nodesRef.current[i].y - nodesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(20, 184, 166, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(nodesRef.current[i].x, nodesRef.current[i].y);
            ctx.lineTo(nodesRef.current[j].x, nodesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodesRef.current.forEach((node, index) => {
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8);
        gradient.addColorStop(0, 'rgba(20, 184, 166, 1)');
        gradient.addColorStop(0.5, 'rgba(20, 184, 166, 0.6)');
        gradient.addColorStop(1, 'rgba(20, 184, 166, 0)');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright dot
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Pulse effect on some nodes
        if (index % 7 === 0) {
          const pulseTime = Date.now() / 1000;
          const pulse = Math.sin(pulseTime * 2 + index) * 0.5 + 0.5;
          const pulseRadius = 12 + pulse * 10;
          
          ctx.beginPath();
          ctx.strokeStyle = `rgba(20, 184, 166, ${pulse * 0.4})`;
          ctx.lineWidth = 2.5;
          ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newSize = updateSize();
      dimensionsRef.current = newSize;
      
      // Reposition nodes to fit new size
      nodesRef.current.forEach(node => {
        node.x = Math.min(node.x, newSize.width);
        node.y = Math.min(node.y, newSize.height);
      });
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-label="Neural network visualization"
    />
  );
});