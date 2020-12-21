import React from 'react';
import './Social.less';
import { ImCodepen, ImLinkedin2, ImGithub } from 'react-icons/im';

const Social = ({isLoading}) => {
   return (
      <>
      {!isLoading &&
      <>
         <section className="social">
            <section className="social-nav">
              <a href="https://www.github.com/jordanutz" target="_blank" rel="noopener noreferrer">
                <ImGithub />
              </a>
              <a href="https://www.linkedin.com/in/jordanutz/" target="_blank" rel="noopener noreferrer">
                <ImLinkedin2 />
              </a>
              <a href="https://codepen.io/jordanutz" target="_blank" rel="noopener noreferrer">
                <ImCodepen />
              </a>
            </section>       
          </section>
          <section className="email">
            <a href="mailto:jordanutz@outlook.com">jordanutz@outlook.com</a>
          </section>
          </>
      } 
      </>
   )
}

export default Social;