interface IRepository {
    Add(T: any);
    Get(T: any): any;
    Update(T: any);
    Delete(T: any);
}

export = IRepository;