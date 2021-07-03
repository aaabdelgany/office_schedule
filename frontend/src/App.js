import getWeek from './rotationService';
import { Container, Table, Alert } from 'react-bootstrap';
function App() {
  const week = getWeek();
  const date = new Date();
  const day = date.getDay();
  const weekEnd = date.getDate() - day + 7;

  if (day !== 1) {
    date.setHours(-24 * (day - 1));
    console.log(date);
  }
  const month = date.toLocaleString('default', { month: 'long' });

  // const weekBegin = date.getDate() - day + 1;

  const Blue = () => {
    return (
      <tr className="table-info">
        <td>Blue</td>
        <td>A</td>
        <td>ABCD</td>
        <td>B</td>
        <td>C</td>
        <td>D</td>
      </tr>
    );
  };
  const Orange = () => {
    return (
      <tr className="table-warning">
        <td>Orange</td>
        <td>D</td>
        <td>ABCD</td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
      </tr>
    );
  };

  const Red = () => {
    return (
      <tr className="table-danger">
        <td>Red</td>
        <td>C</td>
        <td>ABCD</td>
        <td>D</td>
        <td>A</td>
        <td>B</td>
      </tr>
    );
  };
  const Green = () => {
    return (
      <tr className="table-success">
        <td>Green</td>
        <td>B</td>
        <td>ABCD</td>
        <td>C</td>
        <td>D</td>
        <td>A</td>
      </tr>
    );
  };
  return (
    <Container>
      <Alert variant="primary" style={{ marginBottom: 0, borderRadius: 0 }}>
        Office Schedule for the week of {month} {date.getDate()} through{' '}
        {weekEnd}
      </Alert>
      <Table striped bordered hover size="sm">
        <thead>
          <tr
            className={
              week === 1
                ? 'table-info'
                : week === 2
                ? 'table-warning'
                : week === 3
                ? 'table-danger'
                : 'table-success'
            }
          >
            <th>#</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>Tr</th>
            <th>F</th>
          </tr>
        </thead>
        <tbody>
          {week === 1 ? (
            <Blue />
          ) : week === 2 ? (
            <Orange />
          ) : week === 3 ? (
            <Red />
          ) : (
            <Green />
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
