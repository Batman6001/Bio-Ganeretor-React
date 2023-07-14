import './App.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { randomName } from './ComponentsFile.js/nameData'
import { locationData } from './ComponentsFile.js/locationData'
import { schoolData } from './ComponentsFile.js/school'
import { degreeData } from './ComponentsFile.js/degree'
import { occupationData } from './ComponentsFile.js/occupation'
import { religiousData } from './ComponentsFile.js/religiousData'
import { missionariesData } from './ComponentsFile.js/missionariesData'


function App() {

  const [name, setName] = useState()
  const [gender, setGender] = useState('')
  const [location, setLocation] = useState()
  const [school, setSchool] = useState('')
  const [major, setMajor] = useState('')
  const [occupation, setOccupation] = useState('')
  const [textfrist, setTextfrist] = useState('')
  const [textsecond, setTextsecond] = useState('')
  const [selectedImage, setSelectedImage] = useState();
  const [videoUrl, setVideoUrl] = useState('');

  // Chacked Box State   
  const [schoolBox, setSchoolBox] = useState()
  const [locationBox, setLocationBox] = useState()
  const [occupationBox, setOccupationBox] = useState()
  const [religiousBox, setReligiousBox] = useState()
  const [reasonBox, setReasonBox] = useState()



  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      setVideoUrl(dataUrl);
    };

    reader.readAsDataURL(file);
  };

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  

  const currencies = [{
    value: 'Him',
    label: 'Male',
  }, {
    value: 'Her',
    label: 'Female',
  }, {
    value: 'select',
    label: 'select',
  }]
  // ***********************randomName
  const name_handler = () => {
    let newData = randomName[Math.floor(Math.random() * randomName.length)]
    setName(newData.name)
  }
  // ***********************locationData
  const location_handler = () => {
    let newData = locationData[Math.floor(Math.random() * locationData.length)]
    setLocation(newData.location)
  }
  // ***********************SchoolData
  const school_handler = () => {
    let newData = schoolData[Math.floor(Math.random() * schoolData.length)]
    setSchool(newData.school)
  }
  // ***********************DegreeData
  const major_handler = () => {
    let newData = degreeData[Math.floor(Math.random() * degreeData.length)]
    setMajor(newData.degree)
  }
  // ***********************occupationData
  const occupation_handler = () => {
    let newData = occupationData[Math.floor(Math.random() * occupationData.length)]
    setOccupation(newData.occupation)
  }
  // ***********************religiousData
  const religious_handler = () => {
    let newData = religiousData[Math.floor(Math.random() * religiousData.length)]
    setTextfrist(newData.description)
  }
  // ***********************missionariesData
  const restoration_handler = () => {
    let newData = missionariesData[0].description
    setTextsecond(newData)
  }
  const plan_handler = () => {
    let newData = missionariesData[1].description
    setTextsecond(newData)
  }
  const gospel_handler = () => {
    let newData = missionariesData[2].description
    setTextsecond(newData)
  }
  const low_handler = () => {
    let newData = missionariesData[3].description
    setTextsecond(newData)
  }
  const word_handler = () => {
    let newData = missionariesData[4].description
    setTextsecond(newData)
  }
  const any_handler = () => {
    let newData = missionariesData[5].description
    setTextsecond(newData)
  }

  return (
    <>
      <div className="header">
        <h1>Bio Generator</h1>
      </div>
      <div className="coantior">
        <div className="box1">
          <div><h3 className='heading'>Options</h3></div>
          <div className="imageUpload">
            Upload Image
            <input type="file" className="form-control" onChange={imageChange} accept="image/*" />
          </div>
          <div className="imageUpload">
            Upload Video  <input type="file" accept="video/*" onChange={handleFileUpload} />
          </div>
          <div className="inputName">

            <TextField size='small'
              label="Name"
              value={name}
              defaultValue="Name.."
              onChange={(e) => setName(e.target.value)}
            />
            <TextField size='small'
              id="outlined-select-currency"
              select
              label="Gender"
              defaultValue="select"
              onChange={(e) => setGender(e.target.value)}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button sx={{ whiteSpace: "nowrap" }} variant="outlined" onClick={name_handler}>RANDOM NAME</Button>
          </div>
          <div className="inputLocation" >
            <Checkbox onChange={(e) => setLocationBox(e.target.checked)} />
            <TextField size='small' sx={{ mr: '3%' }}
              label="Location"
              value={location}
              defaultValue="Okaya"
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button sx={{ whiteSpace: "nowrap", padding: '2% 7%' }} variant="outlined" onClick={location_handler}>RANDOM Location</Button>
          </div>
          <div className="inputSchool">
            <div className='inputSchool1'>
              <Checkbox onChange={(e) => setSchoolBox(e.target.checked)} />
              <TextField size='small' sx={{ mr: '3%' }}
                label="School"
                value={school}
                defaultValue="University of Liberal Art"
                onChange={(e) => setSchool(e.target.value)}
              />
              <Button sx={{ whiteSpace: "nowrap" }} variant="outlined" onClick={school_handler}>RANDOM SCHOOL</Button>
            </div>
            <div className='inputSchool2'>
              <TextField size='small' sx={{ mr: '3%' }}

                label="Major"
                value={major}
                defaultValue="Training"
                onChange={(e) => setMajor(e.target.value)}
              />
              <Button sx={{ whiteSpace: "nowrap" }} variant="outlined" onClick={major_handler}>RANDOM MAJOR</Button>
            </div>
          </div>
          <div className="inputLocation">
            <Checkbox onChange={(e) => setOccupationBox(e.target.checked)} />
            <TextField size='small' sx={{ mr: '3%' }}
              label="Occupation"
              value={occupation}
              defaultValue="Quality Control Specialis"
              onChange={(e) => setOccupation(e.target.value)}
            />
            <Button sx={{ whiteSpace: "nowrap", padding:'2% 8%' }} variant="outlined" onClick={occupation_handler}>RANDOM OCCUPATION</Button>
          </div>
          <div className="religious">
            <div className='religious1'>
              <Checkbox onChange={(e) => setReligiousBox(e.target.checked)} />
              Religious BackGround
            </div>
            <div className='religious2'>
              <textarea  rows="6" cols="60" value={textfrist} onChange={(e) => setTextfrist(e.target.value)}>
                was raisednon-religious, but has taken some world-religion classes in college
              </textarea>
            </div>
            <div className='religious3'>
              <Button sx={{ whiteSpace: "nowrap" }} variant="outlined" onClick={religious_handler}>RANDOM RELIGION</Button>
            </div>
          </div>

          <div className="reason">
            <div className='religious1'>
              <Checkbox onChange={(e) => setReasonBox(e.target.checked)} />
              Reason for meeting with missionaries
            </div>
            <div className='religious2'>
              <textarea  rows="6" cols="60" value={textsecond} onChange={(e) => setTextsecond(e.target.value)}>
                reading the Bible and talking about it.
              </textarea>
            </div>
            <div className='reason3'>
              <Stack spacing={1} direction="row">
                <Button className='buttons' variant="outlined" style={{ backgroundColor: 'rgb(216, 194, 153)' }} onClick={restoration_handler}>RESTORATION</Button>
                <Button variant="outlined" style={{ backgroundColor: 'rgb(160, 216, 153)' }} onClick={plan_handler}>PLAN OF SALVATION</Button>
                <Button variant="outlined" style={{ backgroundColor: 'rgb(159, 153, 216)' }} onClick={gospel_handler}>GOSPEL OF CHRIST</Button>
              </Stack>
            </div>
            <div className='reason3'>
              <Stack spacing={1} direction="row">
                <Button variant="outlined" style={{ backgroundColor: 'rgb(247, 199, 239)' }} onClick={low_handler}>LOW OF CHASTITY</Button>
                <Button variant="outlined" style={{ backgroundColor: 'rgb(216, 153, 205)' }} onClick={word_handler}>WORD OF WISDON</Button>
                <Button variant="outlined" style={{ backgroundColor: 'rgb(241, 251, 253)' }} onClick={any_handler}>ANY LESSON</Button>
              </Stack>
            </div>
          </div>
        </div>
        <div className="box2">
          <div><h3 className='heading'>Result</h3></div>
          <div className="content">
            {selectedImage && (
              <div className='image'>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  style={{ height: "100%", width: "100%" }}
                  alt="Thumb"
                />
                <button className='overlay-button' onClick={() => setSelectedImage('')}>X</button>
              </div>
            )}
            {name} is from {locationBox ? location : ''}. {gender} is Studying {schoolBox ? major : ''} at {schoolBox ? school : ''}. {gender} currently work as a {occupationBox ? occupation : ''}. {gender} {religiousBox ? textfrist : ''} {gender} {reasonBox ? textsecond : ''}
            {videoUrl && (
              <div className='videoss'>
                <video src={videoUrl}
                  style={{ height: "100%", width: "100%" }}
                  controls />
                <button className='overlay-button' onClick={() => setVideoUrl('')}>X</button>
              </div>
            )}
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
