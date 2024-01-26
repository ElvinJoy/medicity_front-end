const DoctorDashboard = (props) => {
  const { name, department } = props.location.state;
  return (
    <div>
      <h1>Welcome, Dr. {name}!</h1>
      <p>Department: {department}</p>
      {/* Your component content */}
    </div>
  );
};

export default DoctorDashboard