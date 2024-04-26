import {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  cssClassNames,
  animeInfo,
  nextItemIndexInArr,
  objFitProps,
  getRatings,
} from "../util";

interface RatingProps {
  ratings: number;
  left: number;
}

interface TextProps {
  title: string;
  quote: string;
}

interface Info {
  url: string;
  fit: string;
}

interface ImageProps {
  info: Info;
  toggleRenderStyle: () => void;
}

const areImagePropsEqual = (prevProps: ImageProps, newProps: ImageProps) => {
  const isEqual = Object.is(prevProps.info, newProps.info);
  return isEqual;
};
const ImageComponent = ({ info, toggleRenderStyle }: ImageProps) => {
  console.log("Image Component Re-rendering");
  return (
    <img
      className={cssClassNames.imageClassNames + info.fit}
      src={info.url}
      onClick={toggleRenderStyle}
    />
  );
};
const Image = memo(ImageComponent);

const areTextPropsEqual = (prevProps: TextProps, newProps: TextProps) => {
  const isEqual =
    Object.is(prevProps.title, newProps.title) &&
    Object.is(prevProps.quote, newProps.quote);
  return isEqual;
};
const TextComponent = ({ title, quote }: TextProps) => {
  console.log("Text Component Re-rendering");
  return (
    <div className={cssClassNames.textContainerClassNames}>
      <p className={cssClassNames.headingClassNames}>{title}</p>
      <p className={cssClassNames.paragraphClassNames}>{quote}</p>
    </div>
  );
};
const Text = memo(TextComponent);

const Ratings = ({ ratings, left }: RatingProps) => {
  return (
    <div className={cssClassNames.ratingsContainerClassNames}>
      <div
        className={cssClassNames.ratingClassNames}
        style={{ left: `${left}px` }}
      >
        🎖️{ratings}
      </div>
    </div>
  );
};

const Anime = () => {
  // console.log("---- Anime Component Re-rendering ----");
  const [anime, setAnime] = useState(animeInfo[0]);
  const [quote, setQuote] = useState(0);
  const [imageRenderStyle, setImageRenderStyle] = useState(0);
  const [left, setLeft] = useState(0);
  const containerRef = useRef(null);

  const rating = useMemo(() => {
    return getRatings(anime.title);
  }, [anime.title]);

  const imageInfo = useMemo(() => {
    return {
      url: anime.image,
      fit: objFitProps[imageRenderStyle],
    };
  }, [anime.image, imageRenderStyle]);

  const toggleAnime = () => {
    setAnime((el) => {
      return animeInfo[nextItemIndexInArr(animeInfo, el)];
    });
    setQuote(0);
  };

  const toggleQuote = () => {
    setQuote((el) => nextItemIndexInArr(anime.quotes, anime.quotes[el]));
  };

  const toggleRenderStyleFn = () => {
    setImageRenderStyle((el) =>
      nextItemIndexInArr(objFitProps, objFitProps[el])
    );
  };
  const toggleRenderStyle = useCallback(toggleRenderStyleFn, []);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left >= containerRef.current?.offsetWidth ?? 500 ? 0 : left + 1);
    }
  }, [left]);

  return (
    <div className={cssClassNames.parentContainerClassNames}>
      <div className={cssClassNames.containerClassNames} ref={containerRef}>
        <h1 className={cssClassNames.pageTitleClassNames}>Anime World</h1>
        <Image info={imageInfo} toggleRenderStyle={toggleRenderStyle} />
        <Text title={anime.title} quote={anime.quotes[quote]} />
        <div className={cssClassNames.buttonContainerClassNames}>
          <button
            className={cssClassNames.buttonCSSClassNames}
            onClick={toggleAnime}
          >
            Change Anime
          </button>
          <button
            className={cssClassNames.buttonCSSClassNames}
            onClick={toggleQuote}
          >
            Change Quote
          </button>
          <button
            className={cssClassNames.buttonCSSClassNames}
            onClick={toggleRenderStyle}
          >
            Change Image Render Style
          </button>
        </div>
        <Ratings ratings={rating} left={left} />
      </div>
    </div>
  );
};

export default Anime;
