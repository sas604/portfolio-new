import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

export const FancyButton = styled(motion.a)`
  display: block;
  background-color: var(--yellow);
  color: var(--blue);
  text-align: center;
  font-weight: 700;
  max-width: 200px;
  text-align: center;
  text-transform: uppercase;
  font-size: clamp(1rem, 5vw, 1.25rem);
  line-height: 3rem;
  box-shadow: -6px -6px 0px 0px #023047;
  margin-top: 1.5rem;
  flex: 100px;
`;

const CaseStudyStyle = styled.div`
  padding: 4.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.5rem;
  ${({ num }) => num === 1 && 'flex-direction: row-reverse;'}
  .links-group {
    margin-top: 1rem;
    display: flex;

    align-items: flex-end;
  }
  .links {
    display: flex;
    gap: 1rem;
    font-size: 40px;
    * + * {
    }
  }
  .caseStudy-image {
    position: relative;
    display: flex;
    padding: 40px 0 0;
    img,
    .links {
      padding: 10px !important;
      -webkit-filter: drop-shadow(5px 5px 5px #222);
      filter: drop-shadow(1px 1px 4px #02304796);
    }
    .icons {
      top: 0px;
      left: 21%;
      position: absolute;
      display: flex;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: unset;
    > * + * {
      margin-top: 1.5rem;
    }
    .caseStudy-image {
      .icons {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

export default function CaseStudy({ project, num }) {
  return (
    <CaseStudyStyle num={num}>
      <div className="caseStudy-image">
        <motion.div className="icons">
          {project.icons.map((icon, i) => (
            <motion.div key={i}>
              <Image
                quality="100"
                width="35px"
                height="35px"
                objectFit="contain"
                src={`https:${icon.fields.file.url}`}
              />
            </motion.div>
          ))}
        </motion.div>

        <Image
          className="thumb"
          src={`https:${project.coverImage.fields.file.url}`}
          width="500"
          height="300"
          objectFit="contain"
          layout="intrinsic"
          alt={project.coverImage.fields.title}
        />
      </div>
      <div>
        <h2>{project.title}</h2>
        <p className="stack">
          {project.technologies.map((tech, i) =>
            i + 1 === project.technologies.length ? tech : `${tech} / `
          )}
        </p>
        <p>{project.description}</p>
        <div className="links-group">
          {/* <Link href={`/${project.title}`} passHref>
            <FancyButton
              whileTap={{
                x: -6,
                y: -6,
                boxShadow: '0px 0px 0px 0px #023047',
              }}
            >
              Case study
            </FancyButton>
          </Link> */}
          <div className="links">
            <Link href={project.gitHub}>
              <a target="_blank" aria-label="GitHub" title="GitHub">
                <AiFillGithub />
              </a>
            </Link>
            <Link href={project.link}>
              <a
                title="Link to the project"
                target="_blank"
                aria-label="Link to the project"
              >
                <BiLinkExternal />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </CaseStudyStyle>
  );
}
