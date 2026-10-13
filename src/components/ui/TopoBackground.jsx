import topo from "../../assets/topo.svg";

/**
 * Topographic contour lines (a nod to maps/PostGIS work and desert dunes).
 * The SVG is used as a CSS mask so it follows the theme colour with zero JS.
 */
const TopoBackground = ({ className = "", opacity = 0.09, fade = "radial" }) => {
  const fadeMask =
    fade === "radial"
      ? "radial-gradient(ellipse 70% 65% at 60% 40%, #000 30%, transparent 75%)"
      : "linear-gradient(to bottom, transparent, #000 25%, #000 70%, transparent)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ WebkitMaskImage: fadeMask, maskImage: fadeMask }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgb(var(--fg) / ${opacity})`,
          WebkitMaskImage: `url(${topo})`,
          maskImage: `url(${topo})`,
          WebkitMaskSize: "cover",
          maskSize: "cover",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </div>
  );
};

export default TopoBackground;
