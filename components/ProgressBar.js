import NextNprogress from "nextjs-progressbar";
const ProgressBar = () => {
  return (
    <div className="progressBar">
      <NextNprogress color="#a4b3af" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} options={{ easing: "ease", speed: 500 }} />
    </div>
  );
};
export default ProgressBar;
