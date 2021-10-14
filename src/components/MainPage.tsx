import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { RecipeList } from './RecipeList';


export const MainPage = (): JSX.Element =>
	<Container>
		<Row style={{ textAlign: 'center' }}>
			<Col>
				<h1><Badge bg="success">Recipe List</Badge></h1>
			</Col>
		</Row>
		<br />
		<Row>
			<Col>
				<RecipeList />
			</Col>
		</Row>
		<br />
		<br />
		<Row>
			<Col style={{ textAlign: 'center' }}>
				<Button>Add Recipe</Button>
			</Col>
		</Row>
	</Container>;
