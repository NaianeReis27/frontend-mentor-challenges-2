import { Card } from "./styles";
import { useChoose } from "../../hooks/choose";

export const CardPlanComponent = ({ icone, title, value }) => {

  return (
    <Card>
      <img src={icone}></img>
      <div>
        <h4>{title}</h4>
        <p>{useChoose()? `R$${value}/mo` : `R$${12}/mo`}</p>
      </div>
    </Card>
  )
}

