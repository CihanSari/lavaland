import { WorldMatrix } from "./worldmatrix";
import { GameMap, WorldCoordinates, TileType } from "../lavalandcommon";

export class MapGenerator {
  private transitionProbabilities = [
    [0.95, 0.05, 0], // <= Water
    [0.01, 0.98, 0.01], // <= Land
    [0, 1, 0]
  ]; // <= Lava (no transition)
  private mapEdgesInLava = {
    lavaWidth: 30,
    lavaHeight: 15
  };

  private totalNumberOfWisps = 20;
  private totalNumberOfSpeedBoosts = 20;
  private totalNumberOfSpeedBanes = 10;

  private mapMatrix: WorldMatrix<TileType>;
  private map: GameMap;

  constructor(public mapWidth: number, public mapHeight: number) {
    this.mapMatrix = new WorldMatrix<TileType>(this.mapWidth, this.mapHeight);
    const background = this.constructMap() as TileType[][];
    this.map = {
      background,
      player: {
        coords: {
          x: 15,
          y: 20
        }
      },
      wisps: this.getPassableTiles(this.totalNumberOfWisps),
      mapHeight: this.mapHeight,
      mapWidth: this.mapWidth,
      speedBanes: this.getPassableTiles(this.totalNumberOfSpeedBanes),
      speedBoons: this.getPassableTiles(this.totalNumberOfSpeedBoosts)
    };
  }

  public getMap(): GameMap {
    return this.map;
  }

  private getTileProbability(
    neighborType: TileType,
    destinationType: TileType
  ) {
    return this.transitionProbabilities[neighborType][destinationType];
  }

  private isPassable(coordinates: WorldCoordinates) {
    const type = this.mapMatrix.getValue(coordinates.x, coordinates.y);
    if (type === TileType.Water || type === TileType.Lava) {
      return false;
    } else {
      return type != null;
    }
  }

  private getPassableTile(): WorldCoordinates {
    const x = Math.floor(Math.random() * this.mapWidth * 0.999);
    const y = Math.floor(Math.random() * this.mapHeight * 0.999);
    const coords = { x, y };
    if (this.isPassable(coords)) {
      return coords;
    } else {
      return this.getPassableTile();
    }
  }

  private getPassableTiles(nPoints: number) {
    const res: WorldCoordinates[] = [];
    for (let i = 0; i < nPoints; i += 1) {
      res.push(this.getPassableTile());
    }
    return res;
  }

  private constructMap() {
    this.mapMatrix.forEachValue((x, y, value, neighbors) => {
      if (value != null) {
        // it is already set
        return null;
      }

      if (
        x < this.mapEdgesInLava.lavaWidth ||
        y < this.mapEdgesInLava.lavaHeight ||
        x > this.mapWidth - this.mapEdgesInLava.lavaWidth ||
        y > this.mapHeight - this.mapEdgesInLava.lavaHeight
      ) {
        return TileType.Lava;
      }

      const destinationProbabilityDistribution = Array<number>(
        TileType.Count
      ).fill(0);
      for (let neighbor of neighbors.to4Array()) {
        if (neighbor != null) {
          for (
            let destination = 0;
            destination < TileType.Count;
            destination += 1
          ) {
            const destinationProbability = this.getTileProbability(
              neighbor,
              destination
            );
            destinationProbabilityDistribution[
              destination
            ] += destinationProbability;
          }
        }
      }

      const destinationCumProbabilityDistribution = Array<number>(
        TileType.Count
      ).fill(0);
      let totalProbabilityToNormalize = 0;
      for (
        let idxDestination = 0;
        idxDestination < TileType.Count;
        idxDestination += 1
      ) {
        totalProbabilityToNormalize +=
          destinationProbabilityDistribution[idxDestination];
        destinationCumProbabilityDistribution[
          idxDestination
        ] = totalProbabilityToNormalize;
      }

      const probabilityRoll = Math.random() * totalProbabilityToNormalize;
      for (
        let idxDestination = 0;
        idxDestination < TileType.Count;
        idxDestination += 1
      ) {
        if (
          destinationCumProbabilityDistribution[idxDestination] >
          probabilityRoll
        ) {
          return idxDestination as TileType;
        }
      }

      return TileType.Lava;
    });
    return this.mapMatrix.content;
  }
}
