import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  className?: string;
  isHeader?: boolean;
  isFooter?: boolean;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-4 sm:px-8 
    ${
      props.isHeader || props.isFooter
        ? ''
        : 'min-h-[calc(100vh-267px)] lg:min-h-[calc(100vh-219px)]'
    } 
    ${props.yPadding || 'py-16'} ${props.className || ''}`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
