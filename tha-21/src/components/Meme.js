import React, { useState } from "react";

const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "prsmart",
    password: "praveen@321",
    boxes: [],
  });

  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    console.log(url);
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;

      console.log(`boxex[${index}][text]=${box.text}`);
    });
    // console.log(form);
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMeme({...meme, url: data.data.url})
        // console.log(data);
      });
  };

  //   console.log(meme);
  return (
    <div className="meme">
      <img src={meme.url} alt="meme" />
      <div>
        {[...Array(meme.box_count)].map((el, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Meme Caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setForm({ ...form, boxex: newBoxes });
            }}
          />
        ))}
        {/* <input type="text" /> */}
      </div>
      <div>
        <button onClick={generateMeme}>Generate Meme</button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Choose Template
        </button>
      </div>
    </div>
  );
};

export default Meme;
