import { expect } from 'chai';

import { createApp } from '../src/index'
import * as indexExports from '../src';

describe('Module', () => {
  describe('createApp', () => {
    it('should create app with provided args', () => {
      const context = {aa: 10};
      const app = createApp(context);
      expect(app.context).to.deep.equal(context);
    });

    it('should have useDeps', () => {
      expect(indexExports.useDeps).to.be.a('function');
    });
  });
})