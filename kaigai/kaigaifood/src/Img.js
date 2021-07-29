// import React, { useState } from 'react';
// import firebase, { storage } from './firebase/firebase';
// import { BiImageAdd } from 'react-icons/bi';

// const Img = () => {
//   const [image, setImage] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const handleImage = (event) => {
//     const image = event.target.files[0];
//     setImage(image);
//   };
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (image === '') {
//       console.log('ファイルが選択されていません');
//     }
//     // アップロード処理
//     const uploadTask = storage.ref(`/images/${image.name}`).put(image);
//     uploadTask.on(
//       firebase.storage.TaskEvent.STATE_CHANGED,
//       next,
//       error,
//       complete
//     );
//   };
//   const next = (snapshot) => {
//     // 進行中のsnapshotを得る
//     // アップロードの進行度を表示
//     const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log(percent + '% done');
//     console.log(snapshot);
//   };
//   const error = (error) => {
//     // エラーハンドリング
//     console.log(error);
//   };
//   const complete = () => {
//     // 完了後の処理
//     // 画像表示のため、アップロードした画像のURLを取得
//     storage
//       .ref('images')
//       .child(image.name)
//       .getDownloadURL()
//       .then((fireBaseUrl) => {
//         setImageUrl(fireBaseUrl);
//         console.log(imageUrl);
//       });
//   };
//   return (
//     <div className='App'>
//       <label>
//         <BiImageAdd className='add-img' size={40} />
//         <form onSubmit={onSubmit}>
//           <input className='img-input' type='file' onChange={handleImage} />
//         </form>
//       </label>
//       <img src={imageUrl} alt='uploaded' width='100px' />
//     </div>
//   );
// };

// export default Img;

//////////////////////////////////////////////////

import React, { useState } from 'react';
import firebase, { storage } from '../firebase/firebase';
import '../css/App.css';

function Img({ inputHandler }) {
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const handleImage = (event) => {
    event.preventDefault();
    const image = event.target.files[0];
    setImage(image);
    onSubmit(event);
    inputHandler(event);
    console.log(image);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (image === '') {
      console.log('ファイルが選択されていません');
    }
    // アップロード処理
    const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete
    );
    // submitHandler(event);
  };
  const next = (snapshot) => {
    // 進行中のsnapshotを得る
    // アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + '% done');
    console.log(snapshot);
  };
  const error = (error) => {
    // エラーハンドリング
    console.log(error);
  };
  const complete = () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    storage
      .ref('images')
      .child(image.name)
      .getDownloadURL()
      .then((fireBaseUrl) => {
        setImageUrl(fireBaseUrl);
        console.log(imageUrl);
      });
  };
  return (
    <div className='App'>
      {/* <form onSubmit={onSubmit}> */}
      <input
        type='file'
        name='img'
        value={imageUrl}
        onChange={handleImage}
        // onChange={(e) => handleImage(e)}
      />
      {/* <button >Preview</button> */}
      {/* </form> */}
      <img src={imageUrl} alt='uploaded' />
    </div>
  );
}

export default Img;

////////////////////////////////////////

// import React, { useState } from 'react';
// import firebase, { storage } from './firebase/firebase';
// import './App.css';
// function App() {
//   const [image, setImage] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const handleImage = (event) => {
//     const image = event.target.files[0];
//     setImage(image);
//   };
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (image === '') {
//       console.log('ファイルが選択されていません');
//     }
//     // アップロード処理
//     const uploadTask = storage.ref(`/images/${image.name}`).put(image);
//     uploadTask.on(
//       firebase.storage.TaskEvent.STATE_CHANGED,
//       next,
//       error,
//       complete
//     );
//   };
//   const next = (snapshot) => {
//     // 進行中のsnapshotを得る
//     // アップロードの進行度を表示
//     const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log(percent + '% done');
//     console.log(snapshot);
//   };
//   const error = (error) => {
//     // エラーハンドリング
//     console.log(error);
//   };
//   const complete = () => {
//     // 完了後の処理
//     // 画像表示のため、アップロードした画像のURLを取得
//     storage
//       .ref('images')
//       .child(image.name)
//       .getDownloadURL()
//       .then((fireBaseUrl) => {
//         setImageUrl(fireBaseUrl);
//       });
//   };
//   return (
//     <div className='App'>
//       <h1>画像アップロード</h1>
//       <form onSubmit={onSubmit}>
//         <input type='file' onChange={handleImage} />
//         <button>Upload</button>
//       </form>
//       <img src={imageUrl} alt='uploaded' />
//     </div>
//   );
// }
// export default App;
