// https://gist.github.com/joshcanhelp/a3a669df80898d4097a1e2c01dea52c1
export default function({ selector, offset = 0, duration = 1250 }) {
  /*
    Compute selector
  */
  let computedSelector = selector;
  if (typeof computedSelector === "string") {
    // Assuming this is a selector we can use to find an element
    const scrollToObj = document.querySelector(computedSelector);

    if (
      scrollToObj &&
      typeof scrollToObj.getBoundingClientRect === "function"
    ) {
      computedSelector =
        window.pageYOffset + scrollToObj.getBoundingClientRect().top;
    } else {
      throw new Error(
        `No element found with the selector '${computedSelector}'`
      );
    }
  } else if (typeof computedScrollSelector !== "number") {
    // If it's nothing above and not an integer, we assume top of the window
    computedSelector = 0;
  }

  /*
    Apply offset
  */
  computedSelector -= offset;

  /*
    Handle scroll to
  */
  const cosParameter = (window.pageYOffset - computedSelector) / 2;
  let scrollCount = 0;
  let oldTimestamp = window.performance.now();

  const step = newTimestamp => {
    let timestampDiff = newTimestamp - oldTimestamp;
    // Performance.now() polyfill loads late so passed-in timestamp is a larger offset
    // on the first go-through than we want so I'm adjusting the difference down here.
    // Regardless, we would rather have a slightly slower animation than a big jump so a good
    // safeguard, even if we're not using the polyfill.
    if (timestampDiff > 100) {
      timestampDiff = 30;
    }

    scrollCount += Math.PI / (duration / timestampDiff);

    // As soon as we cross over Pi, we're about where we need to be
    if (scrollCount >= Math.PI) {
      return;
    }

    const moveStep = Math.round(
      computedSelector + cosParameter + cosParameter * Math.cos(scrollCount)
    );
    window.scrollTo(0, moveStep);
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
}

// https://gist.github.com/paulirish/5438650
(() => {
  if ("performance" in window === false) {
    window.performance = {};
  }

  Date.now = Date.now || (() => new Date().getTime()); // thanks IE8

  if ("now" in window.performance === false) {
    let nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }

    window.performance.now = () => Date.now() - nowOffset;
  }
})();
