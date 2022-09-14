import dynamic from 'next/dynamic';
import { ElfsightWidgetProps } from 'react-elfsight-widget';

export const ElfsightWidget = dynamic<ElfsightWidgetProps>(
  async () => (await import('react-elfsight-widget')).ElfsightWidget,
  {
    ssr: false
  }
);
