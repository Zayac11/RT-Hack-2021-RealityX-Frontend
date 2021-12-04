export type CameraType = {
    uid: number,
    x_coordinate: string,
    y_coordinate: string,
    is_filled: boolean,
    address?: string,
    timestamp?: string,
    last_img?: string,
    last_img_pred?: string,
}

export type RubbishEventType = {
    id: number,
    filled_containers_number: number,
    containers_number: number,
}

export type DogsCameraType = {
    uid: number,
    x_coordinate: string,
    y_coordinate: string,
    number_of_dogs: number,
    address?: string,
    timestamp?: string,
    last_img?: string,
    last_img_pred?: string,
    events?: Array<DogsEventType>
}

export type DogsEventType = {
    id: number,
    dog_number: number,
}