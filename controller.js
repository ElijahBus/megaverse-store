import express from 'express';
import { xLogoData } from './x-logo-data.js';
import { AstralObject } from './astral-object.model.js';

import tracer from './instrumentation/tracing.js';

const { startSpan } = tracer("megaverse")

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<code>MEGAVERSE STORE</code>');
});

router.get('/api/x-logo-data', (req, res) => {
  res.json(xLogoData);
});

router.get('/api/astral-objects', async (req, res) => {

  try {
    const aos = await AstralObject.find({});

    return res.status(201).json(aos);
  } catch (e) {
    console.log(e.message);

    return res.status(400).json({
      path: req.path,
      message: e.message,
    });
  }
});

router.post('/api/polyanets', async (req, res) => {
  const span = startSpan('/api/polyanets')

  const ao = new AstralObject(req.body);

  try {
    await ao.save();

    return res.status(201).json({
      message: 'Created..',
    });
  } catch (e) {
    console.log(e.message);

    return res.status(400).json({
      path: req.path,
      message: e.message,
    });
  } finally {
    span.end()
  }
});

router.post('/api/soloons', async (req, res) => {
  const span = startSpan('/api/soloons')

  const ao = new AstralObject(req.body);

  try {
    await ao.save();

    return res.status(201).json({
      message: 'Created..',
    });
  } catch (e) {
    console.log(e.message);

    return res.status(400).json({
      path: req.path,
      message: e.message,
    });
  } finally {
    span.end()
  }
});

router.post('/api/comeths', async (req, res) => {
  const span = startSpan('/api/comeths')

  const ao = new AstralObject(req.body);

  try {
    await ao.save();

    return res.status(201).json({
      message: 'Created..',
    });
  } catch (e) {
    console.log(e.message);

    return res.status(400).json({
      path: req.path,
      message: e.message,
    });
  } finally {
    span.end()
  }
});

export default router;
