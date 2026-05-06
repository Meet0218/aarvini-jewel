export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <p className="text-xs tracking-[0.3em] text-warm-gold uppercase">Aarvini Jewel</p>
      <h2 className="mt-2 text-2xl font-semibold text-warm-dark sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-3 max-w-2xl text-sm text-warm-dark/70">{subtitle}</p> : null}
    </div>
  );
}
