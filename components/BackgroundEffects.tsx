export function BackgroundEffects() {
  return (
    <>
      <div className="starfield" aria-hidden="true">
        <div className="starfield-layer foreground" />
        <div className="starfield-layer midground" />
        <div className="starfield-layer background" />
      </div>
      <div className="site-glow" aria-hidden="true" />
    </>
  );
}
