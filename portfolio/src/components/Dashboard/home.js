import { useRef } from "react";
import { auth, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";
const Home = () => {
  const savePortfolio = async (portfolio) => {
    try {
      await axios.post("/api/portfolio", portfolio).then((res) => {
        console.log(`${portfolio.name} has been added successfully`);
        alert(`${portfolio.name} has been added successfully`);
      });
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert(`Failed to add ${portfolio.name}`);
    }
  };
  const form = useRef();

  const submitPortfolio = async () => {
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const sourcecode = form.current[3]?.value;
    const image = form.current[4]?.files[0];

    try {
      const fileName = new Date().getTime() + name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      await uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              savePortfolio({
                name: name,
                description: description,
                url: url,
                sourcecode: sourcecode,
                image: downloadURL,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    } catch (error) {
      console.log(error);
      alert(`Failed to upload ${name}`);
    }
  };

  return (
    <div
      className="dashboard"
      style={{ marginTop: "100px", marginLeft: "200px" }}
    >
      <form
        ref={form}
        onSubmit={(e) => {
          e.preventDefault();
          submitPortfolio();
        }}
      >
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <textarea placeholder="Description" />
        </p>
        <p>
          <input type="text" placeholder="Url" />
        </p>
        <p>
          <input type="text" placeholder="Sourcecode" />
        </p>
        <p>
          <input type="file" placeholder="Image" />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </form>
    </div>
  );
};

export default Home;
