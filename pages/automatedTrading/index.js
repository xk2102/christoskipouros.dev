// CSS
import styles from "./automatedTrading.module.css";
// NEXT

export default function automatedTrading() {
  return (
    <div className={`animate ${styles.automatedTrading}`}>
      <h1>automated trading</h1>
      <p>An automated trading strategy should be as simple as possible.</p>
      <p>
        It is a set of rules that needs to occur multiple times and be profitable. So it is clear that a simple set of rules will have a higher probability of happening again in the future than a more
        complex one.
      </p>
      <p>
        However, this does not mean that the development of an automated trading strategy is a simple task. It consists of many stages under back-testing and forward-testing. All these stages should
        be very clear and transparent as any missed hidden costs could potentially build up and do damage.
      </p>
      <p>
        Such stages are direction and entry-stop-exit, money management and market selection, commissions and slippage, execution-feedback and adjustments for optimization but not over-optimization.
      </p>
      <p>
        <a href="../automatedTrading/C_SimpleFX%20SUITE%202020-11-09_14_43_59.pdf" target="_blank" rel="noreferrer">
          🔗Here
        </a>
        {` (and `}
        <a href="../automatedTrading/C_SimpleFX SUITE 2020-11-09_15_25_08.pdf" target="_blank" rel="noreferrer">
          🔗here
        </a>
        ) is an example of what is described above.
      </p>
      <p>
        This test is performed using the
        <a target="_blank" rel="noreferrer" href="https://www.tradingblox.com/tb/">
          {` Trading Blox `}
        </a>
        software. Commissions and slippage are based on forward-testing on the Interactive Brokers platform.
      </p>
      <p>
        All trading ideas and analysis are meant for research and information purposes only. They do not constitute a market call. Past performance is not indicative of future results. Trading can
        seriously impact your financial health, so be very cautious.
      </p>
    </div>
  );
}
