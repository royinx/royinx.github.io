(function() {
  class Layer {

    constructor(index, input_size, kernel_size, stride, dilation, padding_type, prev_layer) {
      this.index = index;
      this.kernel_size = kernel_size;
      this.stride = stride;
      this.dilation = dilation;
      this.padding_type = padding_type;
      this.input_size = input_size;
      this.prev_layer = prev_layer;
    }

    get dilated_kernel_size() {
      return (this.kernel_size - 1) * this.dilation + 1;
    }

    get padding() {
      return this.output_size - this.raw_output_size;
    }

    get raw_output_size() {
      return Math.ceil((this.input_size - (this.dilated_kernel_size - 1)) / this.stride);
    }

    get output_size() {
      switch (this.padding_type) {
        case 'SAME':
          return Math.ceil(this.input_size / this.stride);
        case 'VALID':
          return this.raw_output_size;
      }
    }

    get growth_rate() {
      let growth_rate = this.prev_layer ? this.prev_layer.growth_rate : 1;
      return this.stride * growth_rate;
    }

    get receptive_field() {
      if (this.prev_layer != null) {
        return this.prev_layer.receptive_field + ((this.kernel_size - 1) * this.dilation) * this.prev_layer.growth_rate;
      } else {
        return (this.kernel_size - 1) * this.dilation + 1;
      }
    }

    toJSON() {
      return {
        index: this.index,
        kernel_size: this.kernel_size,
        stride: this.stride,
        dilation: this.dilation,
        receptive_field: this.receptive_field,
        input_size: this.input_size,
        output_size: this.output_size,
        padding: this.padding
      };
    }
  }

  window.Layer = Layer;
}).call(this);