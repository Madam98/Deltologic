import { useState, useRef } from 'react';
import whitecloud from './assets/whitecloud.png';
import { getWaterVolume } from './api/controller';
import findWaterBlocks from './utils/findWaterBlocks';
import './App.css';
import Scene from "./components/scene";
import { GridLoader } from 'react-spinners';
import { EmptyInputError, InvalidDataFormatError } from './types/instances'

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [surfaceArray, setSurfaceArray] = useState<number[]>([]);
  const [waterBlocks, setWaterBlocksArray] = useState<number[][]>([]);
  const [showScene, setShowScene] = useState(true);
  const [showVolume, setShowVolume] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showVolumeValue, setShowVolumeValue] = useState(false);
  const [volume, setVolume] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleClick = async () => {
    try {
      const inputValue = inputRef.current?.value;
      if (!inputValue) {
        throw new EmptyInputError('Field input is empty');
      }
      if (!/^\d+(,\s*\d+)*$/.test(inputValue)) {
        throw new InvalidDataFormatError('Inavlid data format');
      }
      
      setShowVolume(true);
      setShowScene(true); 
      const surfaceArray = inputValue.split(',').map(Number);
      setSurfaceArray(surfaceArray);
      const waterBlocks = findWaterBlocks(surfaceArray);
      setWaterBlocksArray(waterBlocks);
      const volume = await getWaterVolume(surfaceArray);
      setVolume(volume);
      setShowVolumeValue(true);
      setIsLoading(false);
      console.log(showVolumeValue);
      console.log(surfaceArray);
      console.log(volume)
    } catch (error) {
      if (error instanceof EmptyInputError) {
        console.log(error.message);
        setErrorMessage(error.message);
      } else if (error instanceof InvalidDataFormatError) {
        console.log(error.message);
        setErrorMessage(error.message);
      }
    }
  };
  
  const handleReturn = async () => {
      setShowVolume(false);
      setSurfaceArray(surfaceArray);
      setShowScene(true);
      const volume = null;
      setVolume(volume);
      setIsLoading(true);
      setErrorMessage('');
  }

  return (
    <div className="cloudContainer">
      <div className="center" style={{paddingTop:'18vh'}}>
        <img className="whiteCloud" src={whitecloud} alt="whiteCloud" />
      </div>
      {showScene && (
        <div className="sceneContainer">
          <Scene surface={surfaceArray} waterBlocks={waterBlocks} />
        </div>
      )}
      <div className="inputBox">
        {!showVolume && (
          <div>
            <h4> Enter array to check rain volume </h4>
            <h6> Data format example: 3, 2, 3</h6>
            <input className="inputText" type="text" ref={inputRef} onKeyDown={(e) => {if (e.keyCode === 13) {handleClick();} }}/>
            <div>
              <button className="button" onClick={handleClick}>Check volume</button>
            </div>
          </div>
        )}

        {errorMessage !== '' && (
          <div>
              <h2>ERROR</h2>
              <p>{errorMessage}</p>
          </div>
        )}

        {showVolume && (
          <div>
            <h1>VOLUME</h1>
            {isLoading ? (
              <GridLoader size={15} color={"#249eac"} loading={isLoading} style={{paddingBottom:'1vh'}}/>
            ) : (
              <div>
                <h1>{volume}</h1>
              </div>
            )}
            <div>
              <button className="button2" onClick={handleReturn}>Enter new value</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
}
export default App;
