import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function StudentPage() {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    async function getStudent() {
      const data = {
        id: id,
        role: "students",
      };

      const response = await axios.get(
        "http://localhost:3000/user/?data=" +
          encodeURIComponent(JSON.stringify(data))
      );

      if (response.status === 200) {
        setStudent(response.data.user);
      }
    }

    getStudent();
  }, []);

  console.log(student);

  return (
    <div>
      <p>Student page</p>
    </div>
  );
}
