const Star = <img src="/icons/ic_star.png" />
const StarHalf = <img src="/icons/ic_star_half.png" />
const StarOutline = <img src="/icons/ic_star_outline.png" />
const Stargrey = <img src="/icons/ic_star_grey.png" />

export default function GenerateStar(rate) {
  if (rate === 1) {
    return (
      <div>
        {Star}
        {StarOutline}
        {StarOutline}
        {StarOutline}
        {StarOutline}
      </div>
    );
  } else if (rate > 1 && rate < 2) {
    return (
      <div>
        {Star}
        {StarHalf}
        {StarOutline}
        {StarOutline}
        {StarOutline}
      </div>
    );
  } else if (rate === 2) {
    return (
      <div>
        {Star}
        {Star}
        {StarOutline}
        {StarOutline}
        {StarOutline}
      </div>
    );
  } else if (rate > 2 && rate < 3) {
    return (
      <div>
        {Star}
        {Star}
        {StarHalf}
        {StarOutline}
        {StarOutline}
      </div>
    );
  } else if (rate === 3) {
    return (
      <div>
        {Star}
        {Star}
        {Star}
        {StarOutline}
        {StarOutline}
      </div>
    );
  } else if (rate > 3 && rate < 4) {
    return (
      <div>
        {Star}
        {Star}
        {Star}
        {StarHalf}
        {StarOutline}
      </div>
    );
  } else if (rate === 4) {
    return (
      <div>
        {Star}
        {Star}
        {Star}
        {Star}
        {StarOutline}
      </div>
    );
  } else if (rate > 4 && rate < 5) {
    return (
      <div>
        {Star}
        {Star}
        {Star}
        {Star}
        {StarHalf}
      </div>
    );
  } else if (rate === 5) {
    return (
      <div>
        {Star}
        {Star}
        {Star}
        {Star}
        {Star}
      </div>
    );
  } else {
    return (
      <div>
        {Stargrey}
        {Stargrey}
        {Stargrey}
        {Stargrey}
        {Stargrey}
      </div>
    );
  }
}
