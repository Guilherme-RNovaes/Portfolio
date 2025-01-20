"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRightIcon } from "lucide-react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const projectCursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const projectCursor = projectCursorRef.current;

    let rotation = 0; // Ângulo de rotação
    let lastX = 0; // Última posição X registrada
    let lastY = 0; // Última posição Y registrada
    let accumulatedDistance = 0; // Distância acumulada percorrida

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Calcula a distância percorrida desde o último ponto
      const deltaX = clientX - lastX;
      const deltaY = clientY - lastY;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      // Acumula a distância percorrida
      accumulatedDistance += distance;

      // Atualiza a rotação a cada 200px percorridos
      if (accumulatedDistance >= 500) {
        rotation += 180; // Incrementa 180 graus
        accumulatedDistance = 0; // Reseta a distância acumulada
      }

      // Atualiza a posição e a rotação do cursor
      gsap.to(cursor, {
        x: clientX - 1.5,
        y: clientY - 1.5,
        rotate: rotation,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(projectCursor, {
        x: clientX - 1.5,
        y: clientY - 1.5,
        duration: 0.5,
        ease: "power2.out",
      });

      // Atualiza as últimas posições
      lastX = clientX;
      lastY = clientY;
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 10,
        borderRadius: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        borderRadius: "0%",
        backgroundColor: "#ffffff",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleProjectMouseEnter = () => {
      gsap.to(cursor, {
        opacity: "0",
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(projectCursor, {
        opacity: "100%",
        backgroundColor: "#ffffff90",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleProjectMouseLeave = () => {
      gsap.to(cursor, {
        opacity: "100%",
        backgroundColor: "#ffffff",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(projectCursor, {
        opacity: "0%",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Adiciona animações de hover nos elementos com a classe 'hover-target'
    const hoverElements = document.querySelectorAll(".hover-target");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    const hoverProjects = document.querySelectorAll(".hover-projects");
    hoverProjects.forEach((el) => {
      el.addEventListener("mouseenter", handleProjectMouseEnter);
      el.addEventListener("mouseleave", handleProjectMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      hoverProjects.forEach((el) => {
        el.removeEventListener("mouseenter", handleProjectMouseEnter);
        el.removeEventListener("mouseleave", handleProjectMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: -5,
          left: -5,
          width: "10px",
          height: "10px",
          backgroundColor: "white",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 1000,
        }}
        className="hidden md:block duration-[0.5]"
      />
      <div
        ref={projectCursorRef}
        style={{
          position: "fixed",
          top: 10,
          left: 10,
          pointerEvents: "none",
          zIndex: 1000,
        }}
        className="hidden md:flex opacity-0 bg-white/50 backdrop-blur-[30px] duration-[0.5] items-center justify-center rounded-md text-background p-1 gap-2"
      >
        <h1>Visitar página</h1>
        <span className="bg-background rounded-md text-foreground p-1">
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      </div>
    </>
  );
};

export default CustomCursor;
