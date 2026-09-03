import {FC, memo} from 'react';
import {cn} from '@utils/CN';
import Markdown from 'react-markdown';

const MarkdownFc: FC<{children: string}> = ({children}) => {
  return (
    <Markdown
      components={{
        p: ({node: _node, ...props}) => (
          <p
            {...props}
            className={cn('leading-8 text-gray-700 dark:text-gray-300', props.className)}
          />
        ),
        h1: ({node: _node, ...props}) => (
          <h1
            {...props}
            className={cn(
              'mt-12 mb-5 text-4xl font-black tracking-tight text-black dark:text-white',
              props.className,
            )}
          />
        ),
        h2: ({node: _node, ...props}) => (
          <h2
            {...props}
            className={cn(
              'mt-10 mb-4 text-3xl font-bold tracking-tight text-black dark:text-white',
              props.className,
            )}
          />
        ),
        h3: ({node: _node, ...props}) => (
          <h3
            {...props}
            className={cn(
              'mt-8 mb-3 text-2xl font-semibold text-black dark:text-white',
              props.className,
            )}
          />
        ),
        h4: ({node: _node, ...props}) => (
          <h4
            {...props}
            className={cn(
              'mt-7 mb-3 text-xl font-semibold text-black dark:text-white',
              props.className,
            )}
          />
        ),
        h5: ({node: _node, ...props}) => (
          <h5
            {...props}
            className={cn(
              'mt-6 mb-2 text-lg font-semibold text-black dark:text-white',
              props.className,
            )}
          />
        ),
        h6: ({node: _node, ...props}) => (
          <h6
            {...props}
            className={cn(
              'mt-5 mb-2 text-base font-semibold text-black dark:text-white',
              props.className,
            )}
          />
        ),
        img: ({node: _node, ...props}) => (
          <img
            {...props}
            className={cn(
              'my-10 h-auto max-w-full rounded-3xl border border-gray-200 shadow-md dark:border-gray-800',
              props.className,
            )}
          />
        ),
        code: ({node: _node, className, children, ...props}) => {
          const isBlock = /language-/.test(className ?? '');

          if (!isBlock) {
            return (
              <code
                {...props}
                className={cn(
                  'rounded-lg bg-gray-100 px-1.5 py-0.5 font-mono text-[0.95em] font-medium text-pink-600 dark:bg-gray-800 dark:text-pink-300',
                  className,
                )}>
                {children}
              </code>
            );
          }

          return (
            <pre
              className={
                'my-8 overflow-x-auto rounded-3xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100'
              }>
              <code
                {...props}
                className={cn('font-mono leading-7 text-inherit', className)}>
                {children}
              </code>
            </pre>
          );
        },
        blockquote: ({node: _node, ...props}) => (
          <blockquote
            {...props}
            className={cn(
              'my-8 rounded-3xl border border-blue-200 bg-blue-50 px-6 py-5 text-gray-700 shadow-sm dark:border-blue-900 dark:bg-blue-950/30 dark:text-gray-300',
              props.className,
            )}
          />
        ),
        ul: ({node: _node, ...props}) => (
          <ul
            {...props}
            className={cn(
              'my-6 list-disc space-y-3 pl-6 text-gray-700 marker:text-blue-500 dark:text-gray-300',
              props.className,
            )}
          />
        ),
        ol: ({node: _node, ...props}) => (
          <ol
            {...props}
            className={cn(
              'my-6 list-decimal space-y-3 pl-6 text-gray-700 marker:text-blue-500 dark:text-gray-300',
              props.className,
            )}
          />
        ),
        li: ({node: _node, ...props}) => (
          <li
            {...props}
            className={cn('leading-relaxed marker:text-blue-500', props.className)}
          />
        ),
        hr: ({node: _node, ...props}) => (
          <hr
            {...props}
            className={cn('my-10 border-gray-200 dark:border-gray-800', props.className)}
          />
        ),
      }}>
      {children}
    </Markdown>
  );
};

export default memo(MarkdownFc);
