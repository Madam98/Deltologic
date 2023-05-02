import { Request, Response } from 'express';
import calculateWaterVolume  from '../services/waterVolume';

export function calculateVolume(req: Request, res: Response): void {
  const surfaceArray: number[] = req.body.surfaceArray;
  const volume = calculateWaterVolume(surfaceArray);
  res.set('Content-Type', 'application/json');
  res.send({ volume });
}