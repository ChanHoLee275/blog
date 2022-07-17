import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

const MarkDownContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const MarkDownStyle = styled.div`
  width: 60%;
  height: 100%;
  padding: 25px;
`;

const markdown = `
# 제목
## 부제목 viewer
**굵게**
\`\`\`js
    const list = new Array(10);
\`\`\`
>  👆 Use the toggle above to add the plugin.
`;

const Post = () => {
  return (
    <MarkDownContainer>
      <MarkDownStyle>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={
                    a11yDark as {
                      [key: string]: React.CSSProperties;
                    }
                  }
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </MarkDownStyle>
    </MarkDownContainer>
  );
};

export default Post;
