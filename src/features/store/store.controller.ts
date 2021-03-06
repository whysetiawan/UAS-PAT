import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { CreateUpdateStoreDto } from './dto/create.store.dto';
import { StoreService } from './store.service';

@ApiTags('Store')
@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse({
    description: 'Invalid Token',
  })
  @ApiBearerAuth('access-token')
  @ApiOperation({
    description: 'Get All Store related Store',
  })
  async findAllStore() {
    return {
      message: 'Get All Store Success',
      data: await this.storeService.findAllStore(),
    };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse({
    description: 'Invalid Token',
  })
  @ApiBearerAuth('access-token')
  @ApiOperation({
    description: 'Create a Store',
  })
  async createStore(@Body() createStoreDto: CreateUpdateStoreDto) {
    return {
      mesage: 'Store created successfully',
      data: await this.storeService.createStore(createStoreDto),
    };
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse({
    description: 'Invalid Token',
  })
  @ApiBearerAuth('access-token')
  @ApiOperation({
    description: 'Update a Store',
  })
  @ApiParam({
    name: 'id',
  })
  async updateStore(
    @Body() updateStoreDto: CreateUpdateStoreDto,
    @Param('id') storeId: number,
  ) {
    return {
      message: 'Store Updated Successfully',
      data: await this.storeService.updateStore(updateStoreDto, storeId),
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse({
    description: 'Invalid Token',
  })
  @ApiBearerAuth('access-token')
  @ApiOperation({
    description: 'Create a Store',
  })
  @ApiParam({
    name: 'id',
  })
  async deleteStore(@Param('id') storeId: number) {
    const isDeleted = await this.storeService.deleteStore(storeId);
    if (isDeleted) {
      return {
        message: 'Store Deleted Successfully',
      };
    }
  }
}
