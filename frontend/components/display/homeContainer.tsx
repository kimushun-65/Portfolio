import React, { useEffect, useState } from 'react';

const HomeContainer: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return <div>HomeContainer</div>;
};

export default HomeContainer;
