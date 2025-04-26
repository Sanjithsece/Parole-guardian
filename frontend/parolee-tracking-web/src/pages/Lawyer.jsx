import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper
  } from '@mui/material';
  
  const calls = [
    { time: '10:00 AM', number: '+1-555-1234', duration: '2 mins', type: 'Outgoing' },
    { time: '11:30 AM', number: '+1-555-5678', duration: '5 mins', type: 'Incoming' },
    { time: '02:15 PM', number: '+1-555-9012', duration: '3 mins', type: 'Missed' }
  ];
  
  export default function Lawyer() {
    return (
      <TableContainer component={Paper} className="data-table">
        <Table>
          <TableHead style={{ backgroundColor: '#007bff' }}>
            <TableRow>
              <TableCell style={{ color: 'white' }}>Time</TableCell>
              <TableCell style={{ color: 'white' }}>Number</TableCell>
              <TableCell style={{ color: 'white' }}>Duration</TableCell>
              <TableCell style={{ color: 'white' }}>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {calls.map((call, i) => (
              <TableRow key={i}>
                <TableCell>{call.time}</TableCell>
                <TableCell>
                  <div className="number-cell">
                    <span>{call.number}</span>
                    <span className={`call-type ${call.type.toLowerCase()}`}>{call.type}</span>
                  </div>
                </TableCell>
                <TableCell>{call.duration}</TableCell>
                <TableCell>
                  <span className={`type-badge ${call.type.toLowerCase()}`}>{call.type}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  