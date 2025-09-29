module.exports = {
  improve: 'apostrophe-assets',
  construct(self, options) {
    // Bypass the APOS_BUNDLE=1 mechanism that serves static assets from S3 to ensure we don't
    // collide with the private ACLs imposed for apostrophe-secure-attachments. Without this
    // it won't work on staging or production -Tom
    self.assetUrl = function(web) {
      console.log('** in the improved assetUrl');
      return self.apos.prefix + web;
    };
  }
};
