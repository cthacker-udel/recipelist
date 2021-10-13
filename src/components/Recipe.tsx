import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Badge, Card } from 'react-bootstrap';
import { NumberLiteralType } from 'typescript';

export const Recipe = (props: { name: string, desc: string, type: string, servings: number, difficulty: string, ing: string[], steps: string[], eventKey: string }): JSX.Element =>
	<>
		<Accordion.Item eventKey={props.eventKey}>
			<Accordion.Header>{props.name}</Accordion.Header>
			<Accordion.Body>
				<>
					{props.desc}
					<h3>Type: <Badge bg="primary">{props.type}</Badge></h3>
					<h3>Servings: <Badge bg="secondary">{props.servings}</Badge></h3>
					<h3>Difficulty: <Badge bg="primary">{props.difficulty}</Badge></h3>
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Ingredients</Accordion.Header>
							<Accordion.Body>
								{props.ing.map(e => <p>{e}</p>)}
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
					<Accordion>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Steps</Accordion.Header>
							<Accordion.Body>
								{props.steps.map((e, i) => <Card><Card.Body><Card.Title>{i + 1}</Card.Title><Card.Text>{e}</Card.Text></Card.Body></Card>)}
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</>
			</Accordion.Body>
		</Accordion.Item>
	</>;

