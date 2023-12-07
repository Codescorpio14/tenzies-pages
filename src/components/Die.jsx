import PropTypes from "prop-types";
export default function Die({ value, holdDie }) {
  return (
    <div className={value.isHeld ? "die die-held" : "die"} onClick={holdDie}>
      <img src={`/images/dice-${value.number}.png`} alt="" />
    </div>
  );
}
Die.propTypes = {
  value: PropTypes.object,
  holdDie: PropTypes.func,
};
