import { Index } from "./styles";

export const IndexComponent = ({ title, number, selected }) => {

  return (
    <Index selected={selected}>
      <div className="circle">{number + 1}</div>
      <div className="text-container">
          <p>{`STEP ${number + 1}`}</p>
          <h5>{`${title}`}</h5>
      </div>
    </Index>
  )
}

