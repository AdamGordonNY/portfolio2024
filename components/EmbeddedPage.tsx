const EmbeddedPage = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <iframe
        src="https://adam-gordon.info/groups/22" // Embed a page from siteB.com
        className="flex h-[600px] w-full border-0"
        title="Embedded Page"
      ></iframe>
    </div>
  );
};
export default EmbeddedPage;
