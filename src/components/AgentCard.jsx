import './AgentCard.css';

function AgentCard(props) {
  return (
    <div className="agent-card">
      <img src={props.image} alt={props.name} className="agent-image" />
      <div className="agent-info">
        <h3 className="agent-name">{props.name}</h3>
        <p className="agent-description">{props.description}</p>
      </div>
    </div>
  );
}

export default AgentCard;