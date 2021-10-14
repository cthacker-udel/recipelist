import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export const AddRecipeModal = () => {
	const [show, setShow] = useState<boolean>(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create Recipe</Modal.Title>
					<Row>
						<Col>
							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Recipe name</Form.Label>
									<Form.Control type="text" placeholder="Enter Recipe Name" />
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Select aria-label="Default Select Example" size="sm">
								<option>Recipe Type</option>
								<option value="1">Breakfast</option>
								<option value="2">Lunch</option>
								<option value="3">Dinner</option>
							</Form.Select>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form>
								<Form.Group className="mb-3" controlId="servingsNumber">
									<Form.Label>Amount of Servings</Form.Label>
									<Form.Control type="number" placeholder="0"></Form.Control>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Select aria-label="Default Difficulty Example" size="sm">
								<option value="0">Difficulty Level</option>
								<option value="1">Very Easy</option>
								<option value="2">Easy</option>
								<option value="3">Medium</option>
								<option value="4">Hard</option>
								<option value="5">Very Hard</option>
							</Form.Select>
						</Col>
					</Row>
				</Modal.Header>
			</Modal>
		</>
	);
};

