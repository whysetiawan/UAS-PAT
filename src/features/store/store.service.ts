import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUpdateStoreDto } from './dto';
import { StoreModel } from '../../models/store.model';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(StoreModel)
    private storeRepository: typeof StoreModel,
  ) {
    storeRepository.upsert({
      id: 1,
      name: 'Main Node',
      address: 'Dusseldorf',
      longitude: 107.60981,
      latitude: -6.914744,
    });
  }

  findAllStore() {
    return this.storeRepository.findAll({
      limit: 50,
    });
  }

  createStore(createStoreDto: CreateUpdateStoreDto): Promise<StoreModel> {
    return this.storeRepository.create(createStoreDto);
  }

  async updateStore(
    updateStoreDto: CreateUpdateStoreDto,
    storeId: number,
  ): Promise<boolean> {
    const updatedStore = this.storeRepository.update(updateStoreDto, {
      where: {
        id: storeId,
      },
    });
    if (updatedStore[0] > 0) {
      return true;
    }
    return false;
  }

  async deleteStore(storeId: number): Promise<boolean> {
    const deleted = await this.storeRepository.destroy({
      where: {
        id: storeId,
      },
    });
    if (deleted > 0) {
      return true;
    }
    return false;
  }
}
