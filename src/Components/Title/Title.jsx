import { Helmet } from 'react-helmet';

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Title;
