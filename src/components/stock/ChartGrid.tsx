import { useEffect } from 'react';
import {
  fetchPickedStocks,
  selectSelfPicked,
} from '../../features/slices/selfPickedSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../features/store';

const ChartGrid = () => {
  const selfPicked = useSelector(selectSelfPicked);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchPickedStocks()).then((res) => {
      // if payload is empty or undefined, going back to login
      if (!res.payload) {
        navigate('/');
      }
    });
  }, [dispatch, navigate]);

  // Convert the array of objects into a JSON string
  const jsonString = JSON.stringify(selfPicked.data, null, 2); // The '2' argument adds indentation for readability

  return <pre>{jsonString}</pre>;
};

export default ChartGrid;
