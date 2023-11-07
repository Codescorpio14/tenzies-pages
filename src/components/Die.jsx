import PropTypes from "prop-types";
export default function Die({ value, holdDie }) {
  return (
    <div className={value.isHeld ? "die die-held" : "die"} onClick={holdDie}>
      {value.number}
    </div>
  );
}
Die.propTypes = {
  value: PropTypes.object,
  holdDie: PropTypes.func,
};
