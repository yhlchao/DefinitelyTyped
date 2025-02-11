import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import PrivateLiftStudyInstance from './private-lift-study-instance';
export default class AdStudy extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    getCells(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCheckPoint(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdStudy>;
    getInstances(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createInstance(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PrivateLiftStudyInstance>;
    getObjectives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AdStudy>;
    update(fields: string[], params?: Record<string, any>): Promise<AdStudy>;
}
