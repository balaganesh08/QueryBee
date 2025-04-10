interface StructuredDataProps {
  type: 'website' | 'organization' | 'article' | 'blogPosting';
  data: Record<string, any>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    return JSON.stringify(baseSchema);
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getSchema() }}
    />
  );
};

export default StructuredData;
