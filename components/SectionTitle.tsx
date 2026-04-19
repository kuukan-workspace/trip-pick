type SectionTitleProps = {
  title: string;
  description: string;
};

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
    </div>
  );
}
