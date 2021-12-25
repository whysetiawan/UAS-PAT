import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUpdateProductDto } from './dto/create.product.dto';
import { ProductService } from './products.service';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @ApiOperation({
    description: 'Get All Available Product',
  })
  async findAllAvailableProduct() {
    return {
      message: `Get All Product Success`,
      result: await this.productService.findAllProduct(),
    };
  }

  @Get(':storeId')
  @ApiParam({
    name: 'storeId',
    description: 'Get product list from store id',
  })
  async findProductByStoreId(@Param('storeId') storeId: number) {
    return {
      message: `Success Get Product from store id ${storeId}`,
      result: await this.productService.findProductByStore(storeId),
    };
  }

  @Post()
  async createProduct(@Body() createUpdateProductDto: CreateUpdateProductDto) {
    return {
      message: 'Success Create Product',
      result: await this.productService.createProduct(createUpdateProductDto),
    };
  }

  @Put(':productId')
  async updateProduct(
    @Param('productId') productId: number,
    @Body() createUpdateProductDto: CreateUpdateProductDto,
  ) {
    const isUpdated = this.productService.updateProduct(
      createUpdateProductDto,
      productId,
    );
    if (isUpdated) {
      return {
        message: `Success update product id ${productId}`,
        result: createUpdateProductDto,
      };
    }
    throw new BadRequestException({
      message: 'Product Not Found',
    });
  }
}
