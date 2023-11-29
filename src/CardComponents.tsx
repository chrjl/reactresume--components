import { ResumeEntry } from '@reactresume/types';

interface CardProps {
  entry: ResumeEntry;
}

export const Card = ({ entry }: CardProps) => {
  const { title, subtitle, note, description, highlights } = entry;

  return (
    <div>
      <div className="heading">
        <span className="title">{title}</span>
        {subtitle && <span className="subtitle">{subtitle}</span>}
      </div>

      <div className="body">
        {note && <div className="note">{note}</div>}
        {description && <div className="description">{description}</div>}
        {highlights && <div className="highlights">{highlights}</div>}
      </div>
    </div>
  );
};

